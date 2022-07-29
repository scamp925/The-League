import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { getSingleTeam } from '../../../api/teamsData';
import TeamForm from '../../../components/forms/TeamForm';

export default function EditTeam() {
  const [editItem, setEditItem] = useState();
  const router = useRouter();
  const { firebaseKey } = router.query;

  useEffect(() => {
    getSingleTeam(firebaseKey).then(setEditItem);
  }, [firebaseKey]);

  return (
    <div>
      <TeamForm obj={editItem} />
    </div>
  );
}
