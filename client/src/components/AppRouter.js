import React, { useContext } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { authRoutes, publicRoutes } from "../routes";
import { SHOP_ROUTE } from "../utils/consts";
import { Context } from "../index";
import { observer } from "mobx-react-lite";

const AppRouter = observer(() => {
  const { user } = useContext(Context);
  console.log(user);
  return (
    <Routes>
      {user.isAuth &&
        authRoutes.map(({ path, Component }) => (
          <Route key={path} path={path} element={<Component />} />
        ))}
      {publicRoutes.map(({ path, Component }) => (
        <Route key={path} path={path} element={<Component />} />
      ))}
      <Route path="*" element={<Navigate to={SHOP_ROUTE} />} />
    </Routes>
  );
});

export default AppRouter;

// (01:19:00) не рендерится навигация Route
// 1. замените в импорте Switch и Redirect на: import { Routes, Route, Navigate } from 'react-router-dom;
// 2. замените код в теле компоненты на:
//    return (
//       <Routes>
//          {isAuth && authRoutes.map(({ path, Component }) =>
//             <Route key={path} path={path} element={<Component/>} exact />
//          )}
//          {publicRoutes.map(({ path, Component }) =>
//             <Route key={path} path={path} element={<Component/>} exact />
//          )}
//          <Route path="*" element={<Navigate to={SHOP_ROUTE} />}/>
//       </Routes>
//    );

// (01:31:20) В окне авторизации не выстраивается в линию кнопка "войти" и "зарегистрируйся"
// 1. добавьте import Col from 'react-bootstrap/Col'
// 2. оберните NavLink и Buttom в теги <Col>NavLink</Col> и <Col>Buttom</Col>
// Это же решение будет применяться дальше при аналогичной потребности d-flex row

// (1:44:40) Динамический переход по страницам
// 1. useHistory заменить на useNavigate
// import { useNavigate } from "react-router-dom"
// const history = useNavigate()
// 2. в обработчике событий не вызывать у объекта history функцию push. Сделать так: onClick={() => history(DEVICE_ROUTE + '/' + device.id)}

// "logOut" нужно добавить строку "localStorage.removeItem('token')"
