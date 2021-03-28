import React, { useState, useEffect } from 'react';
import Button from './components/Buttons';
import Input from './components/Input';
import Title from './components/Title';
import PieChart from './components/PieChart';
import DeleteButton from './components/DeleteButton';
import EditButton from './components/EditButton';
import DeleteModal from './components/DeleteModal';
import ErrorModal from './components/ErrorModal';
import EditModal from './components/EditModal';
import {
  HeaderContainer, UserInfoContainer, Form,
  AppContainer, TableContainer, PieChartContainer,
  StyledTable, StyledTableHeader, StyledTableContent,
} from './styles';
import messages from './config/messages';
import callApi from './config/callApi';

const App = () => {
  const [newUser, setNewUser] = useState({});
  const [userData, setUserData] = useState([]);
  const [modalUserDelete, setModalUserDelete] = useState({
    isActive: false,
    data: {},
  });
  const [modalUserUpdate, setModalUserUpdate] = useState({
    isActive: false,
    data: {},
  });
  const [erroModal, setErrorModal] = useState({
    isActive: false,
    data: {},
  });

  const fetchUserData = async () => {
    try {
      const response = await callApi.get('user');
      setUserData(response.data);
    } catch (error) {
      setErrorModal({
        isActive: true,
        data: error,
      });
    }
  };

  const createNewUser = async () => {
    if (newUser.firstName && newUser.lastName && newUser.participation <= 100) {
      try {
        const response = await callApi.post('/user', newUser);
        if (response.status === 201) {
          await fetchUserData();
        }
      } catch (error) {
        setErrorModal({
          isActive: true,
          data: error,
        });
      }
    }
  };

  const deleteCurrentUser = async (userId) => {
    try {
      const response = await callApi.delete(`/user/${userId}`);
      if (response.status === 200) {
        fetchUserData();
        setModalUserDelete({
          isActive: false,
          data: {},
        });
      }
    } catch (error) {
      setErrorModal({
        isActive: true,
        data: error,
      });
    }
  };

  const updateCurrentUser = async (userId, newUpdateUser) => {
    try {
      const response = await callApi.put(`/user/${userId}`, newUpdateUser);
      if (response.status === 200) {
        fetchUserData();
        setModalUserUpdate({
          isActive: false,
          data: {},
        });
      }
    } catch (error) {
      setErrorModal({
        isActive: true,
        data: error,
      });
    }
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  const { app } = messages;

  return (
    <AppContainer>
      <HeaderContainer>
        <Form>
          <Input
            label={app.firstName}
            value={newUser.firstName}
            onChangeText={(e) => setNewUser({ ...newUser, firstName: e.target.value })}
          />
          <Input
            label={app.lastName}
            value={newUser.lastName}
            onChangeText={(e) => setNewUser({ ...newUser, lastName: e.target.value })}
          />
          <Input
            label={app.participation}
            value={newUser.participation}
            onChangeText={(e) => setNewUser({ ...newUser, participation: e.target.value })}
          />
          <Button label={app.sendButton} onClick={createNewUser} />
        </Form>
      </HeaderContainer>
      <Title
        primary={app.title}
        secundary={app.subTitile}
      />
      <UserInfoContainer>
        <TableContainer>
          <StyledTable border="0.5">
            <thead>
              <tr>
                {messages.tableHeader.map((item) => (
                  <StyledTableHeader key={item}>{item}</StyledTableHeader>
                ))}
              </tr>
            </thead>
            <tbody>
              {userData.map((user, index) => (
                <tr key={user._id}>
                  <StyledTableContent>{index + 1 }</StyledTableContent>
                  <StyledTableContent>{user.firstName}</StyledTableContent>
                  <StyledTableContent>{user.lastName }</StyledTableContent>
                  <StyledTableContent>{`${user.participation}%`}</StyledTableContent>
                  <StyledTableContent>
                    <EditButton
                      onClick={() => (setModalUserUpdate({
                        isActive: true,
                        data: user,
                      }))}
                      label={app.editButton}
                    />
                    <DeleteButton
                      onClick={() => (setModalUserDelete({
                        isActive: true,
                        data: user,
                      }))}
                      label={app.deleteButton}
                    />
                  </StyledTableContent>
                </tr>
              ))}
            </tbody>
          </StyledTable>
        </TableContainer>
        <PieChartContainer>
          <PieChart
            data={userData}
          />
        </PieChartContainer>
      </UserInfoContainer>
      <EditModal />
      <DeleteModal
        open={modalUserDelete.isActive}
        data={modalUserDelete.data}
        handleClose={() => setModalUserDelete({ isActive: false, data: null })}
        handleDeleteUser={deleteCurrentUser}
      />
      <EditModal
        open={modalUserUpdate.isActive}
        data={modalUserUpdate.data}
        handleClose={() => setModalUserUpdate({ isActive: false, data: null })}
        handleUpdateUSer={updateCurrentUser}
      />
      <ErrorModal
        open={erroModal.isActive}
        data={erroModal.data}
        handleClose={() => setErrorModal({ isActive: false, data: null })}
      />
    </AppContainer>
  );
};

export default App;
