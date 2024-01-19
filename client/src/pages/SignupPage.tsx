import Input from '../components/Input';
import Button from '../components/Button';
import '../../src/assets/css/Form.css'

const SignupPage = () => {
    return (
        <div className="container">
            <div className="flex-item-1">
                <div>
                    <h1>DocGPT</h1>
                    <h4>
                        Join DocGPT and initiate conversation with
                        your documents
                    </h4>
                    <form method="post" action="">
                        <li>
                            <Input name="username" type="text" label='Username' />
                        </li>
                        <li>
                            <Input name="email" type="email" label='Email' />
                        </li>
                        <li>
                            <Input name="password" type="password" label='Password' />
                        </li>
                        <Button buttonName='Create your account'></Button>
                    </form>
                    <div>
                        <h4>
                            Already have one?{' '}
                            <a href="/auth/signin">Sign In</a>
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
        </div>
    );
};

export default SignupPage;
