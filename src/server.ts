import App from '@/app';
import AuthRoute from '@routes/auth.route';
import IndexRoute from '@routes/index.route';
import BOPRoute from '@routes/bop.route';
import UsersRoute from '@routes/users.route';
import RecruitmentRoute from '@routes/recruitment.route';
import validateEnv from '@utils/validateEnv';

validateEnv();

const app = new App([
    new IndexRoute(),
    new UsersRoute(),
    new AuthRoute(),
    new RecruitmentRoute(),
    new BOPRoute()
]);

app.listen();
