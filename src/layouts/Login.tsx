import styled, { css } from 'styled-components';
import { Alert, Box, Button, Link, TextField, Typography, alpha } from '@mui/material';
import tw from 'twin.macro';
import { useAuthContext } from '../context/AuthContext';
import { useEffect, useState } from 'react';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import customTheme from '../styles/customTheme';

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
    const navigate = useNavigate();
    const { user } = useAuthContext(['user']);

    useEffect(() => {
        if (user !== null) {
            navigate('/');
        }
    }, [user, navigate]);

    const formFields = [
        {
            id: 'email',
            label: 'Email',
            type: 'email',
            name: 'email',
            defaultValue: '',
            onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
                if (updateLoginInfo === undefined) { console.error('updateLoginInfo is undefined'); return; }
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
                if (updateLoginInfo === undefined) { console.error('updateLoginInfo is undefined'); return; }
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
        if (loginInfo?.email === '') {
            setEmailError('Veuillez remplir ce champ');
        }

        if (loginInfo?.password === '') {
            setPasswordError('Veuillez remplir ce champ');
        }

        // Si aucune erreur, appeler la fonction pour connecter l'utilisateur
        if (loginInfo?.email !== '' && loginInfo?.password !== '') {
            if (loginUser === undefined) { console.error('loginUser is undefined'); return; }
            loginUser().then(() => {
                // Faire quelque chose lorsque la promesse est résolue
                // setTimeout() ne marche pas ici
                if (updateLoginInfo === undefined) { console.error('updateLoginInfo is undefined'); return; }
                updateLoginInfo((prev) => ({ ...prev, email: '', password: '' }));
                console.log('Connexion réussie');
                navigate('/');
            }).catch((error) => {
                // Gérer l'erreur
                console.error('catcheur', error);
            });
        }
    }

    return (
        <main className='min-h-screen flex justify-center items-center bg-gradient'>
            <section className='flex flex-col items-center max-w-[70%] h-full p-10 bg-transparant-300 rounded-xl backdrop-blur-2xl'>
                <TextGradient className='w-full text-5xl text-gradient text-center p-2 font-bold font'>Connexion</TextGradient>

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
                            sx={{
                                '& .MuiInputBase-input': {
                                    color: alpha(customTheme.palette.common.white, 0.85),
                                },
                                '& .MuiFilledInput-underline:before': {
                                    borderBottomColor: alpha(customTheme.palette.common.white, 0.5),
                                },
                                '& .MuiFormLabel-root': {
                                    color: alpha(customTheme.palette.common.white, 0.75),
                                },
                            }}
                        />
                    ))}
                    {loginError !== null && <Alert severity="error" sx={{ width: '100%', mt: 2 }} >{loginError}</Alert>}
                    {isLoginLoading === true && <Alert severity="success" sx={{ width: '100%', mt: 2 }} >Vous êtes connecté</Alert>}
                    <Button
                        type="submit"
                        variant="contained"
                        color="secondary"
                        disableElevation
                        sx={{ marginTop: '20px' }}
                    >
                        {isLoginLoading === true ? 'Chargement...' : 'Connexion'}
                    </Button>
                </Box>
                <Box sx={{ mt: 2 }}>
                    <Typography variant="body2" sx={{ color: alpha(customTheme.palette.common.white, 0.55) }}>
                        Vous êtes nouveau ?{' '}
                        <Link component={RouterLink} to="/register" color='secondary' underline='none' sx={{ fontWeight: 700 }}>
                            Inscrivez-vous !
                        </Link>
                    </Typography>
                </Box>
            </section>
        </main>
    );
}

export default App;
