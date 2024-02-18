import styled, { ThemeProvider, css } from 'styled-components';
import { Alert, Box, Button, Link, TextField, createTheme } from '@mui/material';
import tw from 'twin.macro';
import { useAuthContext } from '../context/AuthContext';
import { useState } from 'react';

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

function App(): JSX.Element {
    const { loginInfo, updateLoginInfo, loginUser, loginError, isLoginLoading } = useAuthContext(['loginInfo', 'updateLoginInfo', 'loginUser', 'loginError', 'isLoginLoading']);
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');

    const formFields = [
        {
            id: 'email',
            label: 'Email',
            type: 'email',
            name: 'email',
            defaultValue: '',
            onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
                updateLoginInfo((prev) => ({ ...prev, email: e.target.value }));
            },
        },
        {
            id: 'password',
            label: 'Mot de passe',
            type: 'password',
            name: 'password',
            defaultValue: '',
            onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
                updateLoginInfo((prev) => ({ ...prev, password: e.target.value }));
            },
        },
    ];

    function handleSubmit(e: React.FormEvent<HTMLFormElement>): void {
        e.preventDefault();
        // Réinitialiser les erreurs
        setEmailError('');
        setPasswordError('');

        // Vérifier tous les champs
        if (loginInfo.email === '') {
            setEmailError('Veuillez remplir ce champ');
        }

        if (loginInfo.password === '') {
            setPasswordError('Veuillez remplir ce champ');
        }

        // Si aucune erreur, appeler la fonction pour connecter l'utilisateur
        if (loginInfo.email !== '' && loginInfo.password !== '') {
            loginUser().then(() => {
                // Faire quelque chose lorsque la promesse est résolue
                // setTimeout() ne marche pas ici
                console.log('Connexion réussie');
            }).catch((error) => {
                // Gérer l'erreur
                console.error('catcheur', error);
            });
        }
    }

    return (
        <section className='flex flex-col items-center max-w-[70%] h-full my-10 p-10 bg-transparant-600 rounded-xl backdrop-blur-2xl'>
            <TextGradient className='w-full text-5xl text-gradient text-center p-2 font-bold font'>Connexion</TextGradient>
            <ThemeProvider theme={theme}>

                <hr className='w-full my-5 border-orangePV-1000' />

                <Box
                    component="form"
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        '& .MuiTextField-root': { my: 1, width: '100%' },
                    }}
                    noValidate
                    onSubmit={handleSubmit}
                >

                    {formFields.map((field, index) => (
                        <TextField
                            key={index}
                            id={field.id}
                            label={field.label}
                            type={field.type}
                            variant="filled"
                            color='secondary'
                            required
                            defaultValue={field.defaultValue}
                            onChange={field.onChange}
                            error={field.id === 'email' ? emailError !== '' : passwordError !== ''}
                            helperText={field.id === 'email' ? emailError : passwordError}
                        />
                    ))}
                    {loginError !== null && <Alert severity="error" sx={{ width: '100%', mt: 2 }} >{loginError}</Alert>}
                    {isLoginLoading === true && <Alert severity="success" sx={{ width: '100%', mt: 2 }} >Vous êtes connecté</Alert>}
                    <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        disableElevation
                        sx={{ marginTop: '20px' }}
                    >
                        {isLoginLoading === true ? 'Chargement...' : 'Connexion'}
                    </Button>

                    <Link
                        component="button"
                        variant="body2"
                        onClick={() => {
                            console.info("I'm a button.");
                        }}
                    >
                        Button Link
                    </Link>
                </Box>
            </ThemeProvider>
        </section>
    );
}

export default App;
