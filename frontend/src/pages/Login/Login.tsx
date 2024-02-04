import LoginForm from "@/components/LoginForm";
import Layout from "@/layout/Layout";
import LoginHero from "@/components/LoginHero";

const Login = () => {
  return (
    <Layout className="grid grid-cols-3 h-[90vh]  m-10 ">
      <LoginHero />
      <LoginForm />
    </Layout>
  );
};

export default Login;
