function Home() {
    return (
      <div className="bg-gray-900 text-white flex justify-center min-h-screen">
        <div className="container grid grid-cols-2">
          <div className="flex flex-col gap-4 items-center justify-center py-4">
            <h2 className="text-5xl font-bold">Bem-Vindo!</h2>
            <p className="text-xl">
              Compartilhe seus pensamentos e opiniões conosco.
            </p>
            <div className="flex justify-around gap-4">
              <div className="rounded text-white bg-gray-800 border-gray-600 border-2 py-2 px-4 hover:bg-gray-700 cursor-pointer">
                Nova Postagem
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <img
              src="https://i.imgur.com/fyfri1v.png"
              alt="Imagem Página Home"
              className="w-2/3"
            />
          </div>
        </div>
      </div>
    );
  }
  
  export default Home;
  