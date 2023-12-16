'use server'

import {redirect} from 'next/navigation'
import {db} from '@/db'

export  async function editSnippet(id:number, code:string) {
   
    await db.snippet.update({
        where:{id},
        data:{code}
    });
    redirect(`/snippets/${id}`);
    
}

export async function deleteSnippet(id: number) {
    await db.snippet.delete({
        where:{id}
    });
    redirect('/');
}

export async function createSnippet

    (formState:{message:string},
     formData:FormData
     
     ) {

        try{

       
       // Check the users input and ensure that they  are valid
        const title = formData.get('title') as string;
        const code = formData.get('code') as string;

        if(typeof title !== 'string' || title.length <3){
            return{
                message:'Title must be longer'
            };
        }
        
       
        if(typeof code !== 'string' || code.length <10){
            return{
                message:'Code must be longer'
            };
        }
        
        
        /*//Create a new record in the database
        const snippet = await db.snippet.create({
            data: {
                title,
                code
            },
            
        });
        */
        redirect('/');
        throw new Error ('Failed to save to database!');
        } catch(err:unknown){
            if(err instanceof Error){
                return{
                    message:err.message,
                };
            }else{
                return{
                    message:'something went wrong...',
                }
            }

                

        }

        //Redirect the user to the root route
        
    }