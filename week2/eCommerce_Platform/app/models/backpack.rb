class Backpack < ActiveRecord::Base
	
	#attr_accessible :photo, :model
	#belongs_to :backpack
	#mount_uploader :photo, ImageUploader
	


	#attr_accessible :photo, :model
	#PHOTOS = File.join Rails.root, 'app', 'assets', 'images'
	#after_save :save_photo

	#def photo=(file_data)
	#	unless file_data.blank?
	#		@file_data = file_data
	#		self.extension = file_data.original_filename.split('.').last.downcase
	#	end
	#end

	#def photo_filename
	#	File.join PHOTOS, "#{id}.#{extension}"
	#end

	#def photo_path
	#	"#{id}.#{extension}"
	#end

	#def has_photo? 
	#	File.exists? photo_filename
	#end

	#private
	#def save_photo
	#	if @file_data
	#		FileUtils.mkdir_p PHOTOS 
	#		File.open(photo_filename, 'wb') do |f| 
	#			f.write(@file_data.read)
	#		end

#			@file_data = nil
#		end

#	end


end
