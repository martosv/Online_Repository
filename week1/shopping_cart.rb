require 'pry'
class ShoppingCart
	attr_accessor :apples, :oranges, :grapes, :banana, :watermelon
	def initialize apples, oranges, grapes, banana, watermelon
		@apples = apples
		@oranges = oranges
		@grapes = grapes
		@banana = banana
		@watermelon = watermelon
	end

	def order_fruit
		print "How many apples would you like?"
		apples_pieces = gets.chomp
		print "How many oranges would you like?"
		oranges_pieces = gets.chomp
		print "How many grapes would you like?"
		grapes_pieces = gets.chomp
		print "How many bananas would you like?"
		bananas_pieces = gets.chomp
		print "How many watermelons would like?"
		watermelons_pieces = gets.chomp
	end

	def fruit_cart
		cart = []

	end
end

class Costy c
	attr_accessor :cost
	def initialize 
		@cost = cost
	end


@cart = Hash.new 0	

end

class Cart
	attr_accessor :cart
	def initialize 
		@cart = []
	end


	def add pieces
		@cart.push(pieces)
	end
			
	def cart_cost 
		suma = 0
		@cart.each { |x, y| suma += x*y}

	end		






cart = ShoppingCart.new

cart.add :apple
cart.add :banana
cart.add :banana
cart.add :banana

cart.show
1 apple: 10$
2 bananas: 40$

cart.cost = 50

apples     10$
oranges     5$
grapes     15$
banana     20$
watermelon 50$