import React from 'react';

import { Container, Banner, Avatar, ProfileData, LocationIcon, CakeIcon, Followage } from './styles';

const ProfilePage: React.FC = () => {
  return (
    <Container>
      <Banner>
        <Avatar />
      </Banner>
      <ProfileData>
        {/* <EditButton outlined>Editar perfil</EditButton> */}

        <h1>Leandro Pastore</h1>
        <h2>@leandro_pastore</h2>

        <p>
          Developer at <a href='#'>@enube</a>
        </p>

        <ul>
          <li>
            <LocationIcon />
            São Paulo, Brasil
          </li>
          <li>
            <CakeIcon />
            Nascido(a) em 01 de janeiro de 1989
          </li>
        </ul>

        <Followage>
          <span>
            seguindo <strong>33</strong>
          </span>
          <span>
            <strong>33 </strong> seguidores
          </span>
        </Followage>

      </ProfileData>
    </Container>
  );
}

export default ProfilePage;