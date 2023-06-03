import React from 'react';
import Styled from '../../layout/Styled';
import { Button } from 'primereact/button';
import { Panel } from 'primereact/panel';
import { useGlobalContext } from '../../../contexts/GlobalContext';

const rootClassnames = 'content';

const Content = () => {
  const { title, description } = useGlobalContext();

  return (
    <Styled rootClassnames={rootClassnames}>
      <div className={`${rootClassnames}__container tailwind-margin`}>
        <Panel header={title} className="mb-5">
          <p className="m-0">
            {description}
          </p>
        </Panel>
        <Button label="Submit" icon="pi pi-check" iconPos="right" />
      </div>
    </Styled>
  );
};

export default Content;
