import { makeStyles, createStyles } from '@mui/styles';
import { StyleRules } from '@mui/styles/withStyles';

export function createUseStyles<ClassKey extends string, Props extends {}>(styles: StyleRules<Props, ClassKey>) {
  return makeStyles(() =>
    createStyles(styles),
  );
}
