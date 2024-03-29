import deleteImage from 'shared/assets/images/deleteImage.svg';
import { Button, Modal, Options } from 'shared/components';
import { FlexSpace, Wrapper } from 'shared/components/Layouts';
import { DeleteSvg, SvgContainer } from './styled';

interface Props {
  showConfirmation: boolean;
  setShowConfirmation: (state: boolean) => void;
  confirmAction: () => void;
}

export const DeleteConfirmationMessage = ({
  showConfirmation,
  setShowConfirmation,
  confirmAction,
}: Props) => {
  return (
    <Modal
      showModal={showConfirmation}
      setShowModal={setShowConfirmation}
      title="Deseja deletar o indicador?"
    >
      <Wrapper style={{ maxWidth: '500px', padding: '2rem 0 0 0' }}>
        <FlexSpace>
          <SvgContainer style={{ width: '100%' }}>
            <DeleteSvg src={deleteImage} alt="delete" />
          </SvgContainer>
          <Options>
            <Button secondary onClick={() => setShowConfirmation(false)}>
              cancelar
            </Button>
            <Button onClick={() => confirmAction()}>deletar</Button>
          </Options>
        </FlexSpace>
      </Wrapper>
    </Modal>
  );
};
