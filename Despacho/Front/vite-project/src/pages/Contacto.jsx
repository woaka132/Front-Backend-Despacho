import navComp from '../components/nav'

export default function ContactoPage(){
    return(
        <div className="text-gray-700 overflow-hidden">
            <div className="sm:grid grid-cols-6">
                {navComp()}
                
                <main className="main">
                    <div>
                        <h1 className="mainTitle">Contacto</h1>
                        <div className="pt-20 flex flex-col items-center">
                            <div className="text-white w-6/12">
                                <h2 className="font-bold text-xl">Deja tus comentarios</h2>
                                <p className="text-justify">Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                                    Assumenda dignissimos autem doloribus blanditiis tempora commodi. 
                                    Tenetur, mollitia ducimus asperiores tempora ad voluptas eius 
                                    expedita molestias voluptatem iusto, qui quo error!
                                </p>
                            </div>
                            <form action="">
                                <textarea name="comentario" id="" cols="78" rows="4"></textarea>
                                <button name="send" className="bg-slate-400 border-2 hover:bg-slate-100 hover:border-slate-400"><svg className="w-24" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"></path>
                                </svg>
                                </button>
                            </form>
                        </div>
                    </div>
                    
                </main>
            </div>
        </div>
    )
}