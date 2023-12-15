import {notFound} from 'next/navigation';
import {db} from '@/db';
import SnippetEditForm from '@/components/snippet-edit-form';

interface SnippetEditPageProps{
    params:{
        id:string
    }
} 

    // async function is used to do fetch data inside this component

export default async function SnippetEditPage(props:SnippetEditPageProps){
    const id = parseInt(props.params.id);
        const snippet = await db.snippet.findFirst({
            where:{id },
        });

            if(!snippet){
                return notFound();
            }
            

    return <div>
            <SnippetEditForm  snippet= {snippet}/>
        </div>;
    
}