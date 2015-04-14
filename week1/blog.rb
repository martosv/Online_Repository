class Post
	attr_accessor :title, :date, :text
	def initialize title, date, text
		@title = title
		@date = date
		@text = text
	end
end

class Blog
	attr_accessor :posts
	def initialize 
		@posts = []
	end

	def post_added post
		@posts.push(post)
	end

	def create_front_page
		blog_page = ""
		sort_posts
		@posts.each {|post| 
			blog_page << post.title + "\n--------------------\n" + 
						post.text + "\n\n********************\n\n"} 
		
		blog_page
	end

	def publish_front_page
		puts create_front_page
	end

	def sort_posts
		@posts.sort! { |a, b| b.date <=> a.date }
	end

end

blog = Blog.new

blog.post_added Post.new("Cumpleaños de Jéssica", Time.now + 100, "¡¡Sorpresa!!")
blog.post_added Post.new("Preparativos de cumpleaños", (Time.now) -3600*24*2, "Comprar regalo, comida y bebidas")
blog.post_added Post.new("Enviar invitación a los invitados", Time.now, "50 invitados en total")

blog.publish_front_page


