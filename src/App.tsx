
import { Admin, Resource, ListGuesser, EditGuesser, ShowGuesser } from 'react-admin';
import { dataProvider } from './dataProvider';

export const App = () => (
    <Admin
        dataProvider={dataProvider}
    >
        <Resource name="posts" list={ListGuesser} edit={EditGuesser} show={ShowGuesser} />
        <Resource name="comments" list={ListGuesser} edit={EditGuesser} show={ShowGuesser} />
        <Resource name="supplier" list={ListGuesser} edit={EditGuesser} show={ShowGuesser} />
        <Resource name="product" list={ListGuesser} edit={EditGuesser} show={ShowGuesser} />
        <Resource name="service" list={ListGuesser} edit={EditGuesser} show={ShowGuesser} />
        <Resource name="service_bill" list={ListGuesser} edit={EditGuesser} show={ShowGuesser} />
        <Resource name="inventory" list={ListGuesser} edit={EditGuesser} show={ShowGuesser} />
        <Resource name="reciept" list={ListGuesser} edit={EditGuesser} show={ShowGuesser} />
        <Resource name="sale" list={ListGuesser} edit={EditGuesser} show={ShowGuesser} />
        <Resource name="client" list={ListGuesser} edit={EditGuesser} show={ShowGuesser} />
        <Resource name="staff" list={ListGuesser} edit={EditGuesser} show={ShowGuesser} />
    </Admin>
);

