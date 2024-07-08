import './SignUp.scss';
import Header from '../../Elements/Header/Header';
import Footer from '../../Elements/Footer/Footer';

function SignUp() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [signUpStatus, setSignUpStatus] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('name:', name);
    console.log('Email:', email);
    console.log('Password:', password);
    // API call
    fetch('http://165.227.232.51:3000/auth/register/', {
      method: 'POST',
      body: JSON.stringify({ name, email, password }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.name && data.email && data.password) {
          setSignUpStatus('Inscription réussie !');
          setName('');
          setEmail('');
          setPassword('');
        } else {
          setSignUpStatus("Échec de l'inscription : Données manquantes");
        }
      })
      .catch((error) => {
        console.log('Error:', error);
        setSignUpStatus("Échec de l'inscription : une erreur est survenue");
        setName('');
        setEmail('');
        setPassword('');
      });
  };

  return (
    <div className="SignUp">
      <Header />
      <header className="SignUp-header">
        <h1>Création du compte</h1>
      </header>
      <p>Prénom</p>
      <p>Adresse mail</p>
      <p>Mot de passe</p>
      <button>Créer mon compte</button>
      <Footer />
    </div>
  );
}

export default SignUp;
