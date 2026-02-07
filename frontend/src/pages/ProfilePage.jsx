import '../css/ProfilePage.css'

function ProfilePage() {
  return (
    <div className="profile-page">
      <div className="profile-username">
        Username
      </div>
      <div className="my-teams">
        <h2 className="section-title">
          My Teams
        </h2>
        <div className="table-container">
          <table className="team-list-mine my-teams-table">
            <thead>
              <tr>
                <th>
                  Project Title
                </th>
                <th>
                  Members
                </th>
                <th>
                  Description
                </th>
                <th>
                  Image
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  Project Recon
                </td>
                <td>
                  Me, Myself, and I
                </td>
                <td>
                  I am a robot.
                </td>
                <td>
                  Some image later.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="my-teams">
        <h2 className="section-title">
          Joined Teams
        </h2>
        <div className="table-container">
          <table className="team-list-mine joined-teams-table">
            <thead>
              <tr>
                <th>
                  Project Title
                </th>
                <th>
                  Members
                </th>
                <th>
                  Owner
                </th>
                <th>
                  Description
                </th>
                <th>
                  Image
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  Project Recon
                </td>
                <td>
                  Someone else.
                </td>
                <td>
                  Me, Myself, and I
                </td>
                <td>
                  I am a robot.
                </td>
                <td>
                  Some image later.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default ProfilePage;