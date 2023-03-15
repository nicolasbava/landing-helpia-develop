import PageContainer from "@/components/PageContainer";
import { Stack, Typography, styled } from "@mui/material";

const StyledStack = styled(Stack)(({ theme })=> ({
    background: theme.palette.secondary.dark,
    color: theme.palette.background.default,
    minHeight: '90vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'left',
}));

export default function Custom404() {
    return (
        <PageContainer title="404">
            <StyledStack>

                
                <Typography variant="body1"><strong>404</strong> | Página no encontrada.</Typography>
            </StyledStack   >
        </PageContainer>
        )
  }