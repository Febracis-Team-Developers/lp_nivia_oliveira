import { Button } from '@/components/ui/button';
import React, { useState } from 'react';
import SendToDatabase from './api/saveData';

const MyForm = () => {
    const [email, setEmail] = useState('');
    const [telefone, setTelefone] = useState('');

    const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        console.log('Email changed:', event.target.value); // Adicione este log
        setEmail(event.target.value);
    };

    const handleTelefoneChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        console.log('Telefone changed:', event.target.value); // Adicione este log
        setTelefone(event.target.value);
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        // Aqui você pode usar os valores de email e telefone
        console.log(email);
        console.log(telefone);
        SendToDatabase(email, telefone);
    };

    return ( 
        <div>
            <form onSubmit={handleSubmit}>
                <div className='py-2'>
                    <input 
                        type="email" 
                        id="email" 
                        value={email} 
                        placeholder='Email'
                        onChange={handleEmailChange} 
                        className="w-full p-2 border border-gray-300 rounded text-black"
                    />
                </div>
                <div className='py-2'>
                    <input 
                        type="tel" 
                        id="telefone" 
                        value={telefone} 
                        placeholder='Whatsapp'
                        onChange={handleTelefoneChange} 
                        className="w-full p-2 border border-gray-300 rounded text-black"
                    />
                </div>
                <Button className='w-full' type='submit' variant={'ProjectButton'} size={'ProjectButton'}>
                    Garantir a minha vaga
                </Button>
            </form>
        </div>
    );
}

export default MyForm;
