import React, { useEffect, useState } from 'react';
import { TextField, Button, Box, createTheme, ThemeProvider, Alert, Typography, Link, alpha } from '@mui/material';
import tw from 'twin.macro';
import styled, { css } from 'styled-components';
import { useAuthContext } from '../context/AuthContext';
import { Link as RouterLink, useNavigate } from 'react-router-dom';

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
    const [confirmPassword, setConfirmPassword] = useState('');
    // Ajoutez ces états pour suivre les erreurs
    const { registerInfo, updateRegisterInfo, registerUser, registerError, isRegisterLoading } = useAuthContext(['registerInfo', 'updateRegisterInfo', 'registerUser', 'registerError', 'isRegisterLoading']);
    const [emailError, setEmailError] = useState('');
    const [usernameError, setUsernameError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [confirmPasswordError, setConfirmPasswordError] = useState('');
    const navigate = useNavigate();
    const { user } = useAuthContext(['user']);

    useEffect(() => {
        if (user !== null) {
            navigate('/');
        }
    }, [user, navigate]);

    function handleSubmit(e: React.FormEvent<HTMLFormElement>): void {
        e.preventDefault();

        // Réinitialiser les erreurs
        setEmailError('');
        setUsernameError('');
        setPasswordError('');
        setConfirmPasswordError('');

        // Vérifier tous les champs
        if (registerInfo?.email === '') {
            setEmailError('Veuillez remplir ce champ');
        }
        if (registerInfo?.username === '') {
            setUsernameError('Veuillez remplir ce champ');
        }
        if (registerInfo?.password === '') {
            setPasswordError('Veuillez remplir ce champ');
        }
        if (confirmPassword === '') {
            setConfirmPasswordError('Veuillez remplir ce champ');
        }
        // Vérifier si les mots de passe correspondent
        if (registerInfo?.password !== confirmPassword) {
            setPasswordError('Les mots de passe ne correspondent pas');
            setConfirmPasswordError('Les mots de passe ne correspondent pas');
        }

        // Si aucune erreur, appeler la fonction pour enregistrer l'utilisateur
        if (registerInfo?.email !== '' && registerInfo?.username !== '' && registerInfo?.password !== '' && confirmPassword !== '' && registerInfo?.password === confirmPassword) {
            registerUser().then(() => {
                // Faire quelque chose lorsque la promesse est résolue
                // setTimeout() ne marche pas ici
                // Vider les champs d'entrée
                updateRegisterInfo({ email: '', username: '', password: '' });
                setConfirmPassword('');
                console.log('Inscription réussie');
                navigate('/');
            }).catch((error) => {
                // Gérer l'erreur
                console.error('catcheur', error);
            });
        }
    }
    // azerty@az.com
    // Azerty123&
    const formFields = [
        { label: 'Adresse e-mail', type: 'email', value: registerInfo?.email, name: 'email', onchange: (e: React.ChangeEvent<HTMLInputElement>) => { updateRegisterInfo({ ...registerInfo, email: e.target.value || '' }); } },
        { label: "Nom d'utilisateur", type: 'text', value: registerInfo?.username, name: 'username', onchange: (e: React.ChangeEvent<HTMLInputElement>) => { updateRegisterInfo({ ...registerInfo, username: e.target.value }); } },
        { label: 'Mot de passe', type: 'password', value: registerInfo?.password, name: 'password', onchange: (e: React.ChangeEvent<HTMLInputElement>) => { updateRegisterInfo({ ...registerInfo, password: e.target.value }); } },
        { label: 'Confirmer le mot de passe', type: 'password', value: confirmPassword, name: 'confirmPassword', onchange: (e: React.ChangeEvent<HTMLInputElement>) => { setConfirmPassword(e.target.value); } },
    ];

    return (
        <main className='min-h-screen flex justify-center items-center bg-gradient'>
            <section className='flex flex-col items-center max-w-[70%] h-full p-10 bg-transparant-300 rounded-xl backdrop-blur-2xl'>
                <TextGradient className='w-full text-5xl text-gradient text-center p-2 font-bold font'>Inscription</TextGradient>
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
                                label={field.label}
                                type={field.type}
                                variant="filled"
                                color='secondary'
                                required
                                value={field.value}
                                name={field.name}
                                onChange={field.onchange}
                                error={field.name === 'email' ? emailError !== '' : field.name === 'username' ? usernameError !== '' : field.name === 'password' ? passwordError !== '' : confirmPasswordError !== ''}
                                helperText={field.name === 'email' ? emailError : field.name === 'username' ? usernameError : field.name === 'password' ? passwordError : confirmPasswordError}
                                sx={{
                                    '& .MuiInputBase-input': {
                                        color: alpha(theme.palette.common.white, 0.85),
                                    },
                                    '& .MuiFilledInput-underline:before': {
                                        borderBottomColor: alpha(theme.palette.common.white, 0.5),
                                    },
                                    '& .MuiFormLabel-root': {
                                        color: alpha(theme.palette.common.white, 0.75),
                                    },
                                }}
                            />
                        ))}
                        {registerError !== null && (
                            <Alert severity="error" sx={{ width: '100%', mt: 2 }}>
                                {registerError}
                            </Alert>
                        )}
                        {isRegisterLoading === true && (
                            <Alert severity="success" sx={{ width: '100%', mt: 2 }}>
                                Inscription réussie !
                            </Alert>
                        )}
                        <Button
                            type="submit"
                            variant="contained"
                            color="primary"
                            disableElevation
                            sx={{ marginTop: '20px' }}
                        >
                            {isRegisterLoading === true ? 'Chargement...' : 'Inscription'}
                        </Button>
                    </Box>
                    <Box sx={{ mt: 2 }}>
                        <Typography variant="body2" sx={{ color: alpha(theme.palette.common.white, 0.55) }}>
                                Vous avez déjà un compte ?{' '}
                            <Link component={RouterLink} to="/login" color='secondary' underline='none'>
                                    Connectez-vous
                            </Link>
                        </Typography>
                    </Box>
                </ThemeProvider>
            </section>
        </main>
    );
}

export default RegisterPage;
