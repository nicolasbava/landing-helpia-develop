export const getPlanFreq = (freq: number): string => {
    switch (freq) {
        case 0: {
            return 'Diario';
        }
        case 1: {
            return 'Semanal';
        }

        case 2: {
            return 'Mensual';
        }

        case 3: {
            return 'Bimensual';
        }

        case 4: {
            return 'Trimestral';
        }

        case 5: {
            return 'Semestral';
        }

        case 6: {
            return 'Anual';
        }

        default: {
            return 'Mensual';
        }
    }
}

export const getPlanCurrency = (freq: number): string => {
    switch (freq) {

        case 1: {
            return '$';
        }

        case 2: {
            return 'USD';
        }
        case 6: {
            return 'MXN';
        }
        default: {
            return '$';
        }
    }
}


