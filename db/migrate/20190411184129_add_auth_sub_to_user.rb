class AddAuthSubToUser < ActiveRecord::Migration[5.2]
  # Add this code *within* the `class` definition
def self.from_auth_hash(payload)
  User.find_or_create_by(auth_sub: payload["sub"]) do |user|
    # This code will be called whenever we create a User for the first time.

    # This code would save a user's avatar as a URL
    # user.avatar_url = payload["picture"]

    # This code would attach an ActiveStorage profile image by downloading the user's profile and storing it locally
    # If you do this, you must also run `bundle add down` to add the `down` gem
    #
    # begin
    #   picture = Down.download(payload["picture"])
    #   user.profile_image.attach(io: picture, filename: picture.original_filename)
    # rescue Down::Error => exception
    #   Rails.logger.info exception
    # end

    # This code would store their email address
    # user.email = payload["email"]

    # Capture the user's name
    user.name = payload["name"]
    end
  end
end
