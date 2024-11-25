import React, { useState } from 'react';
import styles from './home.module.css';

console.log('env string:', `${process.env.ConnectSTR}/AddUser`);

function Home() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [file, setFile] = useState(null);

    const join = async () => {
        if (username !== '' && password !== '' && file !== null) {
            console.log('working:', { username, password, file });

            const formData = new FormData();
            formData.append('username', username);
            formData.append('password', password);
            formData.append('file', file);
            //http://localhost:8080/app/AddUser/
            let response;
            try {
                response = await fetch(`http://localhost:8080/app/AddUser/`, {
                    method: 'POST',
                    body: formData,
                    credentials: 'include'
                });

                console.log('responce status:', response.status);
                if (response.status) {
                    document.location.href = '/vacancies';
                } else {
                    console.error('Registration failed');
                }
            } catch (err) {
                console.log('responce status:', response.status);
                console.error(err);

            }
        }
    };

    return (
        <div className={styles.container}>
            <div className={styles.formContainer}>
                <h1 className={styles.WhiteSpace}>{`Registration`}<br /></h1>
                <input
                    className={styles.input}
                    placeholder='Username...'
                    onChange={(e) => setUsername(e.target.value)}
                />
                <input
                    type="password"
                    className={styles.input}
                    placeholder='Password...'
                    onChange={(e) => setPassword(e.target.value)}
                />
                <input
                    type="file"
                    className={styles.input}
                    placeholder='Resume'
                    onChange={(e) => setFile(e.target.files[0])}
                />
                <button
                    className={`${styles.btn} btn btn-secondary`}
                    style={{ width: '100%' }}
                    onClick={join}>
                    Sign in
                </button>
            </div>
        </div>
    );
}

export default Home;
