import { cleanup, render, screen } from '@testing-library/react';
import ResultBox from './ResultBox';
import '@testing-library/jest-dom/extend-expect';

  describe('Component ResultBox', () => {
    const testCasesPLNToUSD = [
        { amount: 100, expected: 'PLN 100.00 = $28.57' },
        { amount: 20, expected: 'PLN 20.00 = $5.71' },
        { amount: 200, expected: 'PLN 200.00 = $57.14' },
        { amount: 345, expected: 'PLN 345.00 = $98.57' },
    ];
    
    const testCasesUSDToPLN = [
        { amount: 100, expected: '$100.00 = PLN 350' },
        { amount: 20, expected: '$20.00 = PLN 70' },
        { amount: 50, expected: '$50.00 = PLN 175' },
        { amount: 22, expected: '$22.00 = PLN 77' },
    ];

    it ('should render without crashing', () => {
        render(<ResultBox  from="PLN"  to="USD"  amount={100} />)
    });

    for (const testObj of testCasesPLNToUSD) {
        it('should render proper info about conversion PLN -> USD', () => {
          render(<ResultBox from='PLN' to='USD' amount={testObj.amount} />);
          const mainDiv = screen.getByTestId('main-div');
          expect(mainDiv).toHaveTextContent(testObj.expected);
        });
        cleanup();
      };
    
    for (const testObj of testCasesUSDToPLN) {
        it('should render proper info about conversion USD -> PLN', () => {
            render(<ResultBox from='USD' to='PLN' amount={testObj.amount} />);
            const mainDiv = screen.getByTestId('main-div');
            expect(mainDiv).toHaveTextContent(testObj.expected);
        });
        cleanup();
    };

    it ('should render proper info about conversion PLN -> PLN', () => {
        render(<ResultBox from='PLN' to='PLN' amount={100} />);
        const mainDiv = screen.getByTestId('main-div');
        expect(mainDiv).toHaveTextContent('PLN 100.00 = PLN 100.00');
    });

    it ('should render proper info about conversion USD -> USD', () => {
        render(<ResultBox from='USD' to='USD' amount={200} />);
        const mainDiv = screen.getByTestId('main-div');
        expect(mainDiv).toHaveTextContent('$200.00 = $200.00');
    });

    it ('should render wrong value if value is < 0', () => {
        render(<ResultBox from='USD' to='PLN' amount={-10} />);
        const mainDiv = screen.getByTestId('error');
        expect(mainDiv).toHaveTextContent('Wrong value');
    });


  });