import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { useFetchQuery } from '@app/store/services/events';

export default function ErrorPage() {
  const { data, isSuccess } = useFetchQuery({});

  return (
    <>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Url</TableCell>
            <TableCell>Start Time</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {isSuccess &&
            data.map((row) => (
              <TableRow key={row.id}>
                <TableCell>{row.name}</TableCell>
                <TableCell>{row.url}</TableCell>
                <TableCell>{row.startTime}</TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </>
  );
}
