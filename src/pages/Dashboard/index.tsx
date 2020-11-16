import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';

import { Container, Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoImg} alt="GitHub Explorer" />
      <Title>Explore repositórios no GitHub</Title>

      <Form>
        <input placeholder="Digite o nome do repositório" />
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        <a href="/">
          <img
            src="https://avatars2.githubusercontent.com/u/25139090?s=460&u=d313c1479cbc81452d740a9fc73f37fd0f9e7ac4&v=4"
            alt="Deivison"
          />
          <div>
            <strong>deivisondc/minesweeper</strong>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos
              nisi optio officia et, quam inventore numquam quidem atque
            </p>
          </div>

          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;
