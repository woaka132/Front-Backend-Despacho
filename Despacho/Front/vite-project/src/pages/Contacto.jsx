import navComp from '../components/nav'
import { useForm } from "react-hook-form"
import { getComments,createComments } from '../api/comments.js'
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"

export default function ContactoPage(){
    const { register, handleSubmit, formState:{errors}} = useForm()
    const [coommentss, setcoommentss] = useState ([]);
    const navigate = useNavigate()

    const comments = async () => {
        try {
            const res = await getComments()
            return res.data
        } catch (error) {
            console.log(error.response)
        }
        
    }
    
    const createComments1 = async (user) => {
        try {
            await createComments(user)
            return navigate(0)
        } catch (error) {
            console.log(error.response)
        }

    }


    useEffect (() => {
        comments().then (values => setcoommentss(values))    
    }, [ ]);

    const onSubmit = handleSubmit(async(data) => { 
        createComments1(data)
    })


    return(
        <div className="text-gray-700 overflow-hidden">
            <div className="sm:grid grid-cols-6">
                {navComp()}
                
                <main className="main  overflow-y-scroll no-scrollbar ">
                    <div>
                        <h1 className="mainTitle">Contacto</h1>
                        <div className="pt-20 flex flex-col items-center ">
                            <div className="text-white w-6/12 ">
                                <h2 className="font-bold text-xl">Deja tus comentarios</h2>
                                <p className="text-justify">Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                                    Assumenda dignissimos autem doloribus blanditiis tempora commodi. 
                                    Tenetur, mollitia ducimus asperiores tempora ad voluptas eius 
                                    expedita molestias voluptatem iusto, qui quo error!
                                </p>
                            </div>
                            <form className='flex flex-col p-5' onSubmit={onSubmit}>
                                <input type="text" className='bg-cyan-200 text-black w-40 rounded-r-xl text-center' placeholder='Titulo' {...register("title",{required:true})}/>
                                { errors.title && <p className="text-red-500">El título es necesario</p> }
                                <textarea name="comentario" id="" cols="60" rows="4" placeholder='descripcion' {...register("description",{required:true})}></textarea>
                                { errors.description && <p className="text-red-500">La descripción es necesario</p> }
                                <button  className="p-2 bg-slate-200" >Enviar Comentario</button >

                            </form>
                            {
                        coommentss.map( comment => (
                            <div key={comment._id} className='flex-col w-96 bg-gray-200 text-black p-2 m-5 rounded-xl'>
                                <div className='flex'>
                                <h2 className='w-1/2'>{comment.title}</h2>
                                <h2 className=' w-1/2 text-sm'>{comment.date.substr(0,10)}</h2>
                                </div>
                                
                                <p className='pl-2'>{comment.description}</p>
                            </div>
                        ))
                    }
                        </div>
                    </div>
                 
                </main>
            </div>
        </div>
    )
}