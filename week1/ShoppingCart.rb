require 'pry'

class ShoppingCart
	@@prices = {
		:apple	 	=> 10,
		:orange 	=> 5,
		:grape		=> 15,
		:banana		=> 20,
		:watermelon	=> 50
	}

	def initialize
		@cart = Hash.new 0	
	end


	def fruit_price fruit
		@@prices[fruit]
	end

	def fruit_added fruit 
		@cart[fruit] += 1
	end	

	def show
		shopping_cart_calculated = calculate_shopping_cart
		
		shopping_cart_calculated.each_with_index do |(key,value),index|
			puts "#{index+1}: #{key}=> #{@cart[key]} items #{value}$"
		end

	end

	def calculate_shopping_cart
		calculated_cart = {}
		@cart.each do |key,value|
			calculated_cart[key] = fruit_price(key) * value
		end
		calculated_cart			
	end	

	def get_cost
		apply_deals
		shopping_cart_calculated = calculate_shopping_cart
		shopping_cart_calculated.reduce(0) {|sum, (key, val)| sum += val}
		#shopping_cart_calculated.values.reduce(:+)
	end

	def apply_deals
		apply_apple_deal
		apply_orange_deal
		apply_grape_deal
	end

	def apply_apple_deal
		if @cart[:apple] > 3
			@cart[:apple] = (@cart[:apple]*2.0/3.0).round
		end
	end

	def apply_orange_deal
		oranges = @cart[:orange]
		if(oranges > 4)
			aux = (oranges/4).floor
			@cart[:orange] -= aux
		end
	end

	def apply_grape_deal
		grapes = @cart[:grape]
		if(grapes > 4)
			aux = (grapes/4).floor
			@cart[:banana] -= aux
			@cart[:banana] < 0 ? @cart[:banana] =0 : false
		end
	end

end

shopping_cart = ShoppingCart.new


shopping_cart.fruit_added :apple
shopping_cart.fruit_added :apple
shopping_cart.fruit_added :apple
shopping_cart.fruit_added :apple
shopping_cart.fruit_added :orange
shopping_cart.fruit_added :orange
shopping_cart.fruit_added :orange
shopping_cart.fruit_added :orange
shopping_cart.fruit_added :grape
shopping_cart.fruit_added :grape
shopping_cart.fruit_added :grape
shopping_cart.fruit_added :grape
shopping_cart.fruit_added :banana
shopping_cart.fruit_added :banana
shopping_cart.fruit_added :banana
shopping_cart.fruit_added :watermelon


shopping_cart.show
puts "The cost of your shopping cart with deals is #{shopping_cart.get_cost}$"
