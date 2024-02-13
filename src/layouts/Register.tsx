import React, { useState } from 'react';
import { TextField, Button, Box, createTheme, ThemeProvider } from '@mui/material';
import tw from 'twin.macro';
import styled, { css } from 'styled-components';

const theme = createTheme({
    palette: {
        primary: {
            main: 'rgba(11, 49, 86, 0.8)', // Couleur verte
        },
        secondary: {
            main: 'rgba(243, 129, 99, 1)', // Couleur existante
        },
    },
});

const gradient = css`
  background: linear-gradient(90deg, #0a3155, #172e60, #2e2966, #471d67, #5f0061, #0a3155);
  background-size: 200% auto;
  color: transparent;
  -webkit-background-clip: text;
  background-clip: text;
  animation: gradient 5s linear infinite;

  @keyframes gradient {
    0% {background-position: 0% 50%;}
    50% {background-position: 100% 50%;}
    100% {background-position: 0% 50%;}
  }
`;

const TextGradient = styled.h1`
  ${tw`w-full text-5xl text-center p-2 font-bold`}
  ${gradient}
`;

function RegisterPage(): JSX.Element {
    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [confirmPassword, setConfirmPassword] = useState<string>('');
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
        event.preventDefault();
        if (password === confirmPassword &&
            password.length > 0 &&
            username.length > 0 &&
            email.length > 0) {
            console.log('Inscription réussie');
        } else {
            console.log('Inscription échouée');
        }
    };

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
        const { name, value } = event.target;
        switch (name) {
            case 'username':
                setUsername(value);
                break;
            case 'password':
                setPassword(value);
                break;
            case 'email':
                setEmail(value);
                break;
            case 'confirmPassword':
                setConfirmPassword(value);
                break;
            default:
                break;
        }
    };

    const formFields = [
        { label: 'Adresse e-mail', type: 'email', value: email, name: 'email', onChange: handleChange },
        { label: "Nom d'utilisateur", type: 'text', value: username, name: 'username', onChange: handleChange },
        { label: 'Mot de passe', type: 'password', value: password, name: 'password', onChange: handleChange },
        { label: 'Confirmez le mot de passe', type: 'password', value: confirmPassword, name: 'confirmPassword', onChange: handleChange },
    ];

    return (
        <section className='flex flex-col items-center max-w-[70%] h-full my-10 p-10 bg-transparant-600 rounded-xl backdrop-blur-2xl'>

            <TextGradient className='w-full text-5xl text-gradient text-center p-2 font-bold font'>Inscription</TextGradient>
            <ThemeProvider theme={theme}>

                <hr className='w-full my-5 border-orangePV-1000' />

                <Box
                    component="form"
                    sx={{
                        display: 'flex', // Utilisez flex pour permettre l'alignement et la justification
                        flexDirection: 'column', // Empile les éléments verticalement
                        justifyContent: 'center', // Centre les éléments verticalement
                        alignItems: 'center', // Centre les éléments horizontalement
                        '& .MuiTextField-root': { my: 1, width: '100%' },
                    }}
                    noValidate
                    autoComplete="off"
                    onSubmit={handleSubmit}
                >
                    {formFields.map((field, index) => (
                        <TextField
                            key={index}
                            label={field.label}
                            type={field.type}
                            variant="filled"
                            color='secondary'
                            required
                            value={field.value}
                            name={field.name}
                            onChange={field.onChange}
                        />
                    ))}
                    <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        disableElevation
                        sx={{ marginTop: '20px' }}
                    >
                    S&apos;inscrire
                    </Button>
                </Box>
            </ThemeProvider>
        </section>
    );
}

export default RegisterPage;
