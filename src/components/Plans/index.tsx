import React, { forwardRef } from "react";
import Grid, { GridProps } from "@mui/material/Grid";
import { Stack, LinearProgress, styled, Box, BoxProps  } from "@mui/material";
import useHelpiaApi from "@/hooks/use-helpia-api";
import { ApiPlanDescription, ApiPlanType } from "@/types/api";
import PlanCard from "@/components/PlanCard";


export const PlansContainer = styled(Box)<BoxProps>(() => ({
  "&.MuiBox-root": {
      background: '#F5F5F5',
      paddingBottom: '10vh',
      paddingTop: '7vh',
      margin: 'auto',
  },
}));

const Plans = forwardRef<any, Pick<GridProps, "sx">>((props, ref) => {
  const [loading, setLoading] = React.useState<boolean>(false);
  const [plans, setPlans] = React.useState<Array<ApiPlanType>>([]);
  const { apiGet } = useHelpiaApi();

  React.useEffect(() => {
    loadPlans();
    // eslint-disable-next-line
  }, []);
  const loadPlans = () => {
    setLoading(true);
    apiGet<Array<ApiPlanType>>("/v2/billing/subscription/types")
      .then((r) => {
        setPlans(
          r.map((x) => {
            return {
              ...x,
              description: JSON.parse(
                x.description as string
              ) as ApiPlanDescription,
            };
          })
        );
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  };

  return (
    <Grid container ref={ref} spacing={4} justifyContent="center" {...props}>
      {loading && (
        <Grid item xs={12}>
          <Stack
            sx={{ p: 8, width: "100%" }}
            direction="row"
            justifyContent="center"
          >
            <LinearProgress
              color="secondary"
              sx={{
                height: "16px",
                width: { xs: "100%", sm: "80%", md: "70%", lg: "60%" },
                borderRadius: "8px",
              }}
            />
          </Stack>
        </Grid>
      )}

      {!loading && plans.length > 0 && (
        <>
          {plans.map((plan, key) => {
            return (
              <Grid
                item
                key={key}
                xs={12}
                md={6}
                lg={4}
                sx={{ display: "flex", justifyContent: "center" }}
              >
                <PlanCard plan={plan} />
              </Grid>
            );
          })}
          
        </>
      )}
    </Grid>
  );
});
Plans.displayName = "Plans";
export default Plans;
