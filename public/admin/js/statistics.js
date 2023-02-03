document.addEventListener('DOMContentLoaded', async () => {
  document.getElementById('form').addEventListener('submit', (e) => {
    e.preventDefault();
  });
});

async function getStatistics() {
  const id = document.getElementById('peopleId').value;

  const data = await axios({
    method: 'get',
    url: window.location.href + `/${id}`,
  })
    .then((result) => {
      return result.data;
    })
    .catch((error) => {
      alert('정보를 불러오는데 실패했습니다.');
      window.location.reload();
    });

  const { userProfile, semesterAttendances, positionAttendanceRank } = data;

  const profile = document.getElementById('profile');
  profile.style.display = '';

  document
    .getElementById('peopleImg')
    .setAttribute('src', userProfile.BandUser.profileUrl);
  document.getElementById(
    'peopleName',
  ).innerText = `${userProfile.name} (${userProfile.studentNo})`;
  document.getElementById(
    'peoplePosition',
  ).innerText = `${userProfile.offPosition}`;
  if (userProfile.defPosition !== 'STAFF' && userProfile.defPosition !== 'no') {
    document.getElementById(
      'peoplePosition',
    ).innerText += ` / ${userProfile.defPosition}`;
  }

  const monthlyTable = document.getElementById('monthlyTable');
  monthlyTable.style.display = '';

  const reportsChart = document.getElementById('reportsChart');
  reportsChart.innerHTML = '';

  const chartData = {
    presence: [],
    late: [],
    total: [],
    categories: [],
  };

  semesterAttendances.usualAttendances.forEach((monthlyAttendance) => {
    const total =
      monthlyAttendance.presence +
      monthlyAttendance.late +
      monthlyAttendance.absent;
    chartData.presence.push(
      parseInt((monthlyAttendance.presence / total) * 100),
    );
    chartData.late.push(parseInt((monthlyAttendance.late / total) * 100));
    chartData.total.push(
      parseInt(
        ((monthlyAttendance.presence + monthlyAttendance.late) * 100) / total,
      ),
    );
    chartData.categories.push(
      `${monthlyAttendance.year}-${monthlyAttendance.month}`,
    );
  });

  new ApexCharts(document.querySelector('#reportsChart'), {
    series: [
      {
        name: '출석률',
        data: chartData.total,
      },
      {
        name: '참석비율',
        data: chartData.presence,
      },
      {
        name: '늦참비율',
        data: chartData.late,
      },
    ],
    chart: {
      height: 350,
      type: 'area',
      toolbar: {
        show: false,
      },
    },
    markers: {
      size: 4,
    },
    colors: ['#4154f1', '#2eca6a', '#ff771d'],
    fill: {
      type: 'gradient',
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 0.3,
        opacityTo: 0.4,
        stops: [0, 90, 100],
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: 'smooth',
      width: 2,
    },
    xaxis: {
      type: 'text',
      categories: chartData.categories,
    },
  }).render();

  const offPositionView = document.getElementById('offPositionHolder');
  const offPositionDesc = document.getElementById('offPositionDescript');
  const offPositionRank = document.getElementById('offPositionRank');
  const offPositionTotal = document.getElementById('offPositionTotal');

  offPositionView.style.display = '';
  offPositionDesc.innerHTML = `오펜스 포지션 출석 비교<span> | 최근 30일</span>`;
  offPositionRank.innerText = `${positionAttendanceRank.offPositionRank}위`;
  offPositionTotal.innerText = ` ${positionAttendanceRank.offPositionTotal}명`;

  if (userProfile.defPosition !== 'STAFF' && userProfile.defPosition !== 'no') {
    const defPositionView = document.getElementById('defPositionHolder');
    const defPositionDesc = document.getElementById('defPositionDescript');
    const defPositionRank = document.getElementById('defPositionRank');
    const defPositionTotal = document.getElementById('defPositionTotal');

    defPositionView.style.display = '';
    defPositionDesc.innerHTML = `디펜스 포지션 출석 비교<span> | 최근 30일</span>`;
    defPositionRank.innerText = `${positionAttendanceRank.defPositionRank}위`;
    defPositionTotal.innerText = ` ${positionAttendanceRank.defPositionTotal}명`;
  }
}
