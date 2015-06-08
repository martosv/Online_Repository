class LaptopsController < ApplicationController
	def index
		@laptops = Laptop.all #se usa @ para que se pueda interpretar tambien por viewers ademas de los controladores
		# .all es para que coja todos los laptos que hay
	end

	def show
		@laptop = Laptop.find(params[:id]) # para mostrar los distintos parametros de cada laptop
	end

	def new
		@laptop = Laptop.new
	end

	def edit
		@laptop = Laptop.find(params[:id])
	end

	def create
		@laptop = Laptop.new(laptop_params)
		@laptop.save
		redirect_to laptop_path(@laptop)
	end

	def update
		@laptop = Laptop.find(params[:id])
		@laptop.update(laptop_params)
		redirect_to  laptop_path(@laptop) #laptop_path es el metodo show al fin y al cabo
	end

	def destroy
		@laptop = Laptop.find(params[:id])
		@laptop.destroy

		redirect_to root_path
	end

	private # para aceptar solo los parametros que nos interesa o se quiere controlar
	def laptop_params
		params.require(:laptop).permit(:brand, :model, :processor_brand, :ram_size, :price)
	end
end
