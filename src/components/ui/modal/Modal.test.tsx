import '@testing-library/jest-dom/vitest';
import { fireEvent, render, screen } from '@testing-library/react';
import { describe, test, expect } from 'vitest';

import { Typography } from '../typography/Typography';

import { Modal, MODAL_TEST_IDS } from './Modal';

describe('UI /  Modal', () => {
  test('should display Modal with back layout when open is true ', () => {
    render(<Modal open />);

    const container = screen.getByTestId(MODAL_TEST_IDS.CONTAINER);
    const backLayout = screen.getByTestId(MODAL_TEST_IDS.BACK_LAYOUT);

    expect(container).toBeInTheDocument();
    expect(backLayout).toBeInTheDocument();
  });

  test('should not display Modal with back layout when open is false', () => {
    render(<Modal open={false} />);

    const modal = screen.getByTestId(MODAL_TEST_IDS.MODAL);

    expect(modal).toBeEmptyDOMElement();
  });

  test('should display Modal children content', () => {
    render(
      <Modal open>
        <Typography>Some CONTENT</Typography>
      </Modal>
    );

    const content = screen.getByTestId(MODAL_TEST_IDS.CONTETN);

    expect(content).toBeInTheDocument();
  });

  test('should display Modal and hide on click at backLayout ', () => {
    let open = true;

    const handleClosed = () => {
      open = false;
    };

    render(
      <Modal open={open} onClose={handleClosed}>
        <Typography>Some CONTENT</Typography>
      </Modal>
    );

    const modal = screen.getByTestId(MODAL_TEST_IDS.MODAL);
    const container = screen.getByTestId(MODAL_TEST_IDS.CONTAINER);
    const backLayout = screen.getByTestId(MODAL_TEST_IDS.BACK_LAYOUT);

    expect(container).toBeInTheDocument();
    expect(backLayout).toBeInTheDocument();

    fireEvent.click(backLayout);

    expect(modal).toBeEmptyDOMElement();
  });

  test('should display Modal and hide at click on closed button', () => {
    let open = true;

    const handleClosed = () => {
      open = true;
    };

    render(
      <Modal open={open} onClose={handleClosed}>
        <Typography>Some CONTENT</Typography>
      </Modal>
    );

    const modal = screen.getByTestId(MODAL_TEST_IDS.MODAL);
    const container = screen.getByTestId(MODAL_TEST_IDS.CONTAINER);
    const buttonClose = screen.getByTestId(MODAL_TEST_IDS.CLOSE_BUTOTN);

    expect(container).toBeInTheDocument();
    expect(buttonClose).toBeInTheDocument();

    fireEvent.click(buttonClose);

    expect(modal).toBeEmptyDOMElement();
  });
});
