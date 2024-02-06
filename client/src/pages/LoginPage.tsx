import { useAuth } from '../contexts/AuthContext';
import Input from '../components/Input';
import Button from '../components/Button';
import { toast } from 'react-hot-toast';
import '../../src/assets/css/Form.css';

const LoginPage = () => {

    const auth = useAuth();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formdata = new FormData(e.currentTarget);
        const email = formdata.get('email') as string;
        const password = formdata.get('password') as string;
        try {
            toast.loading("Logging In", { id: 'login' });
            await auth?.login(email, password);
            toast.success("Sucessfully Logged In", { id: 'login' });
        } catch (error) {
            toast.error("Failed Logging In", { id: 'login' });
        }
    }
    return (
        <div className="container">
            <div>
                <h1>DocGPT</h1>
                <h4>Hey folks! Welcome Back</h4>
                <form onSubmit={handleSubmit} >

                    <Input
                        type="email"
                        name="email"
                        label="Email"
                    />


                    <Input
                        type="password"
                        name="password"
                        label="Password"
                    ></Input>
                    <Button type='submit' buttonName="Continue"></Button>
                </form>
                <div>
                    <h4>
                        Don't have one?{' '}
                        <a href="/auth/signup">Create one</a>
                    </h4>
                </div>
                <div>
                    <h3>
                        By continuing you agree to our{' '}
                        <a href="">Terms</a> and{' '}
                        <a href="">Privacy Policy</a>
                    </h3>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
