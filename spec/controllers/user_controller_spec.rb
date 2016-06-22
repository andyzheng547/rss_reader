require 'rails_helper'
require 'json'

describe UsersController, type: :controller do
  context 'routes' do
    let!(:username) {'username'}
    let!(:password) {'password'}
    let!(:parameters) {{:user => {username: username, password: password}}}

    before(:each) do
      post :create, parameters
    end

    describe 'POST create - /users ' do
      it 'should accept a JSON string and create a user' do
        user = User.last

        expect(user.username).to eq(username)
        expect(user.authenticate(password).is_a?(User)).to eq(true)
        expect(user.authenticate(password)).to eq(user)
      end

      it 'returns status 201 when created' do
        expect(response.status).to eq(201)
      end

      it 'should serialize the created user and return a json string' do
        user = User.last
        expect(response.body).to eq(UserSerializer.new(user).to_json)
      end
    end

    describe 'GET show - /users/:id ' do
      it 'should find the correct user and return the serialized user' do
        user = User.last
        get :show, id: user.id

        expect(response.body).to eq(UserSerializer.new(user).to_json)
        expect(JSON.parse(response.body)["user"]["id"]).to eq(user.id)
      end
    end

    describe 'GET find - /users/find' do
      it 'should return status 200 if username and password are correct' do
        get :find, parameters

        expect(response.status).to eq(200)
      end

      it 'should be able to find the correct user if username and password are correct' do
        user = User.last
        get :find, parameters

        parsed_resp = JSON.parse(response.body)

        expect(response.body).to eq(UserSerializer.new(user).to_json)
        expect(parsed_resp["user"]["id"]).to eq(user.id)
        expect(parsed_resp["errors"]).to be_nil
      end

      it 'should return status 404 if the username or password are not correct' do
        get :find, {:user => {username: 'fake username', password: 'fake password'}}

        expect(response.status).to eq(404)
      end

      it 'should return an error in the response body' do
        get :find, {:user => {username: 'fake username', password: 'fake password'}}

        parsed_resp = JSON.parse(response.body)

        expect(parsed_resp["errors"]).not_to be_nil
        expect(parsed_resp["errors"]["user"]).to eq("could not find user")
      end
    end

    describe 'PATCH update - /users/:id ' do
      let!(:new_username) {'newUsername'}
      let!(:new_password) {'newPassword'}

      it 'should be able to update the password' do
        user = User.last
        old_password = password

        put :update, { id: user.id, user: {password: new_password}}
        user.reload

        expect(user.authenticate(old_password)).to eq(false)
      end

      it 'should be able to update the username' do
        user = User.last
        old_username = username

        put :update, {id: user.id, user: {username: new_username, password: password}}
        user.reload

        expect(response.status).to eq(200)
        expect(user.username).not_to eq(old_username)
      end
    end

    describe 'DELETE destroy - /users/:id ' do
      it 'should destroy a user' do
        old_user_count = User.count

        delete :destroy, {id: User.last.id}

        expect(User.count).to eq(old_user_count - 1)
      end
    end
  end
end
