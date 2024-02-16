import {Route, Routes} from 'react-router-dom';

import {Donation} from '../components/donation';
import {Blood} from '../components/bloodtype';
import {HomePage} from '../components/paginaInicial'
import {City} from '../components/city';
import {Person} from '../components/person'
import {Location} from '../components/location'
import {State} from '../components/state'

export function MyRouter(){
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/doar" element={<Donation />} />
        <Route path="/tiposanguineo/*" element={<Blood />}/>
        <Route path="/city" element={<City/>}></Route>
        <Route path="/person" element={<Person/>}></Route>
        <Route path="/location" element={<Location/>}></Route>
        <Route path="/state" element={<State/>}></Route>
      </Routes>
}