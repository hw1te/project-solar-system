import React, { Component } from 'react';
import PropTypes from 'prop-types';
/* Consultei os links: https://spectrum.chat/react/general/proptype-for-image~7b8d284d-525d-46ab-a6ff-b8cb99a3cc79
https://dirask.com/questions/ESLint-Must-use-destructuring-state-assignment-eslint-react-destructuring-assignment-p2q04D
Consultei o repositório do colega de turma Magno Govueia: https://github.com/tryber/sd-019-b-project-solar-system/pull/126/commits/cb08dd33dd8caae5475c1ecee667658d2e974c9d */

class PlanetCard extends Component {
  render() {
    const { planetName } = this.props;
    const { planetImage } = this.props;
    return (
      <div data-testid="planet-card">
        <img src={ planetImage } alt={ `Planeta ${planetName}` } />
        <p data-testid="planet-name">
          {planetName}
        </p>
      </div>
    );
  }
}

PlanetCard.propTypes = {
  planetName: PropTypes.string.isRequired,
  planetImage: PropTypes.string.isRequired,
};

export default PlanetCard;
