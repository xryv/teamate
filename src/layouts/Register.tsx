import React, { useState } from 'react';
// import { StyledRegister } from './StyledRegister';
import './main.css';

function RegisterPage() {
    // const [username, setUsername] = useState('');
    // const [password, setPassword] = useState('');
    // const [email, setEmail] = useState('');
    // const [confirmPassword, setConfirmPassword] = useState('');

    // const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    //     setUsername(event.target.value);
    // };

    // const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    //     setPassword(event.target.value);
    // };

    // const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    //     setEmail(event.target.value);
    // };

    // const handleConfirmPasswordChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    //     setConfirmPassword(event.target.value);
    // };

    // const handleSubmit = (event: React.FormEvent): void => {
    //     event.preventDefault();
    // // Ajoutez ici la logique pour envoyer les données d'inscription au serveur
    // };

    return (
        <section className='flex flex-col w-fit h-full my-10 p-10 bg-transparant-600 rounded-xl backdrop-blur-2xl'>

            <h1 className='w-full text-5xl text-gradient text-center p-2 mb-10 border-b border-orangePV-900 font-bold font'>Inscription</h1>

            {/* <form className='' onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="email">Adresse e-mail :</label>
                    <input type="email" id="email" name="email" required value={email} onChange={handleEmailChange} />
                </div>
                <div>
                    <label htmlFor="username">Nom d'utilisateur :</label>
                    <input type="text" id="username" name="username" required value={username} onChange={handleUsernameChange} />
                </div>
                <div>
                    <label htmlFor="password">Mot de passe :</label>
                    <input type="password" id="password" name="password" required value={password} onChange={handlePasswordChange} />
                </div>
                <div>
                    <label htmlFor="confirm-password">Confirmez le mot de passe :</label>
                    <input type="password" id="confirm-password" name="confirm-password" required value={confirmPassword} onChange={handleConfirmPasswordChange} />
                </div>
                <div>
                    <button type="submit" id="registerButton">S'inscrire</button>
                </div>
                <div id="formFeedback"></div>
            </form> */}
    <form onSubmit={handleSubmit}>
      <TextField
        label="Adresse e-mail"
        type="email"
        required
        value={email}
        onChange={handleEmailChange}
      />
      <TextField
        label="Nom d'utilisateur"
        required
        value={username}
        onChange={handleUsernameChange}
      />
      <TextField
        label="Mot de passe"
        type="password"
        required
        value={password}
        onChange={handlePasswordChange}
      />
      <TextField
        label="Confirmez le mot de passe"
        type="password"
        required
        value={confirmPassword}
        onChange={handleConfirmPasswordChange}
      />
      <Button type="submit" variant="contained" color="primary">
        S'inscrire
      </Button>
    </form>
    );
}

export default RegisterPage;
