import { useTranslation } from 'react-i18next';

import {
  Card,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import YouTubeIcon from '@mui/icons-material/YouTube';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

const metubeUrl = `http://${window.location.hostname}:8081`;

const SettingsDownloadMusic = () => {
  const { t } = useTranslation();

  return (
    <Card>
      <CardHeader
        title={t('settings.metube.title')}
      />
      <Divider />
      <CardContent>
        <Grid container sx={{ flexDirection: 'column' }}>
          <Grid>
            <List disablePadding>
              <ListItem disablePadding>
                <ListItemButton
                  component="a"
                  href={metubeUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  <ListItemIcon>
                    <YouTubeIcon />
                  </ListItemIcon>
                  <ListItemText
                    primary={t('settings.metube.row-label')}
                    secondary={t('settings.metube.row-description')}
                  />
                  <OpenInNewIcon sx={{ color: 'text.secondary' }} />
                </ListItemButton>
              </ListItem>
            </List>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default SettingsDownloadMusic;
