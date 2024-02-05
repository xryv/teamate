import { PencilLine, Trash2 } from 'lucide-react';

export function ChatList({ list, onEdit, onDelete }: { list: Array<{ message: string, id: string, user: string, timestamp: string }>, onEdit: (id: string) => void, onDelete: (id: string) => void }): JSX.Element {
    return (
        <ul>
            {list.map((content) => (
                <li className='relative' key={content.id}>
                    <p>{content.message}</p>
                    <small>{content.timestamp}</small>
                    <div className='absolute top-0 right-0'>
                        {content.user === 'user' && <>
                            <button className='' type='button' onClick={() => { onEdit(content.id); }}><PencilLine /></button>
                            <button className='' type='button' onClick={() => { onDelete(content.id); }}><Trash2 /></button>
                        </>}
                    </div>
                </li>
            ))}
        </ul>
    );
}
