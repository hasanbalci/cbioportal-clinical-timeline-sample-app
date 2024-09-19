import 'font-awesome/css/font-awesome.min.css';
import 'cbioportal-clinical-timeline/dist/styles.css';
import './App.css';

import {
  configureTracks,
  ITimelineConfig,
  Timeline,
  TimelineStore,
  TimelineTrackSpecification,
  TimelineEventAttribute,
  TimelineEvent
} from 'cbioportal-clinical-timeline';

function makeItems(data: TimelineEvent[], containingTrack: TimelineTrackSpecification){
  return data.map((e: TimelineEvent) => {
    e.containingTrack = containingTrack
    return e
  });
}

function App() {

  const width = 1920;

  let data1: TimelineEvent[] = [{
    start: 1430,
    end: 1430,
    event: {
      'attributes': [{
        key: "Status",
        value: "Date of Progression"
      }],
      'eventType': "Status",
      'patientId': "gbm_columbia_2019_13",
      'startNumberOfDaysSinceDiagnosis': 1430,
      'endNumberOfDaysSinceDiagnosis': 1430,
      'studyId': "gbm_columbia_2019",
      'uniquePatientKey': "Z2JtX2NvbHVtYmlhXzIwMTlfMTM6Z2JtX2NvbHVtYmlhXzIwMTk"
    }
  } as TimelineEvent,
  {
    start: 1690,
    end: 1690,
    event: {
      'attributes': [{
        key: "Status",
        value: "DECEASED"
      }],
      'eventType': "Status",
      'patientId': "gbm_columbia_2019_13",
      'startNumberOfDaysSinceDiagnosis': 1690,
      'studyId': "gbm_columbia_2019",
      'uniquePatientKey': "Z2JtX2NvbHVtYmlhXzIwMTlfMTM6Z2JtX2NvbHVtYmlhXzIwMTk"
    }
  } as TimelineEvent];
  let trackSpecification: Partial<TimelineTrackSpecification> = {
    type: "STATUS",
    uid: "STATUS",
    renderTooltip: (e) => {
      return (
        <table>
          <tbody>
            <tr>
              <th>SAMPLE ID</th>
              <td>
                {trackSpecification.type}
              </td>
            </tr>
          </tbody>
        </table>
      );
    }
  };

  trackSpecification.items = makeItems(data1, trackSpecification as TimelineTrackSpecification);

  let data2: TimelineEvent[] = [{
    start: 1386,
    end: 1386,
    event: {
      'attributes': [{
        key: "Status",
        value: "Date of Progression"
      },
      {
        key: "AGENT",
        value: "Nivolumab"
      },
      {
        key: "Treatment_TYPE",
        value: "Medical Therapy"
      }],
      'eventType': "Treatment",
      'patientId': "gbm_columbia_2019_13",
      'startNumberOfDaysSinceDiagnosis': 1386,
      'endNumberOfDaysSinceDiagnosis': 1386,
      'studyId': "gbm_columbia_2019",
      'uniquePatientKey': "Z2JtX2NvbHVtYmlhXzIwMTlfMTM6Z2JtX2NvbHVtYmlhXzIwMTk"
    }
  } as TimelineEvent];

  const trackSpecifications2: TimelineTrackSpecification[] = [];
  let trackSpecification2: Partial<TimelineTrackSpecification> = {
    items: [],
    type: "TREATMENT",
    uid: "TREATMENT",
    tracks: trackSpecifications2,
    renderTooltip: (e) => {
      return (
        <table>
          <tbody>
            <tr>
              <th>SAMPLE ID</th>
              <td>
                {trackSpecification2.type}
              </td>
            </tr>
          </tbody>
        </table>
      );
    }
  };
  const trackSpecifications3: TimelineTrackSpecification[] = [];
  let trackSpecification3: Partial<TimelineTrackSpecification> = {
    items: [],
    type: "Targeted Therapy",
    uid: "TREATMENT.Other.Targeted Therapy",
    tracks: trackSpecifications3,
    renderTooltip: (e) => {
      return (
        <table>
          <tbody>
            <tr>
              <th>SAMPLE ID</th>
              <td>
                {trackSpecification3.type}
              </td>
            </tr>
          </tbody>
        </table>
      );
    }
  };
  let trackSpecification4: Partial<TimelineTrackSpecification> = {
    type: "Nivolumab",
    uid: "TREATMENT.Other.Targeted Therapy.Nivolumab",
    renderTooltip: (e) => {
      return (
        <table>
          <tbody>
            <tr>
              <th>SAMPLE ID</th>
              <td>
                {trackSpecification4.type}
              </td>
            </tr>
          </tbody>
        </table>
      );
    }
  };
  trackSpecification4.items = makeItems(data2, trackSpecification4 as TimelineTrackSpecification);

  const trackSpecifications: TimelineTrackSpecification[] = [];
  trackSpecifications.push(trackSpecification as TimelineTrackSpecification);
  trackSpecifications.push(trackSpecification2 as TimelineTrackSpecification);
  trackSpecifications2.push(trackSpecification3 as TimelineTrackSpecification);
  trackSpecifications3.push(trackSpecification4 as TimelineTrackSpecification);
  const store = new TimelineStore(trackSpecifications);
  return (
    <>
      <div>
        <div>
          <Timeline
            store={store}
            width={width}
            //headerWidth={headerWidth}
            onClickDownload={() => { return null }
            }
          />
        </div>
        <div style={{marginTop: '70px', marginLeft: '25px'}}>
          <p><b>Data</b></p>
          <textarea
            value = {JSON.stringify(data, null, 2)}
            rows={20}
            cols={50}
          />
        </div>
      </div>
    </>
  );
}

let data = [
  {
    "type": "STATUS",
    "uid": "STATUS",
    "items": [{
      "attributes": [{
        "key": "Status",
        "value": "Date of Progression"
      }],
      "eventType": "Status",
      "patientId": "gbm_columbia_2019_13",
      "startNumberOfDaysSinceDiagnosis": 1430,
      "endNumberOfDaysSinceDiagnosis": 1430,
      "studyId": "gbm_columbia_2019",
      "uniquePatientKey": "Z2JtX2Nv"
    },
    {
      "attributes": [{
        "key": "Status",
        "value": "DECEASED"
      }],
      "eventType": "Status",
      "patientId": "gbm_columbia_2019_13",
      "startNumberOfDaysSinceDiagnosis": 1690,
      "studyId": "gbm_columbia_2019",
      "uniquePatientKey": "Z2JtX2Nv"
    }]
  },
  {
    "type": "TREATMENT",
    "uid": "TREATMENT",
    "items": [],
    "tracks": [
      {
        "type": "Targeted Therapy",
        "uid": "TREATMENT.Other.Targeted Therapy",
        "items": [],
        "tracks": [
          {
            "type": "Nivolumab",
            "uid": "TREATMENT.Other.Targeted Therapy.Nivolumab",
            "items": [{
              "attributes": [{
                "key": "Status",
                "value": "Date of Progression"
              },
              {
                "key": "AGENT",
                "value": "Nivolumab"
              },
              {
                "key": "Treatment_TYPE",
                "value": "Medical Therapy"
              }],
              "eventType": "Treatment",
              "patientId": "gbm_columbia_2019_13",
              "startNumberOfDaysSinceDiagnosis": 1386,
              "endNumberOfDaysSinceDiagnosis": 1386,
              "studyId": "gbm_columbia_2019",
              "uniquePatientKey": "Z2JtX2Nv"
            }]
          }
        ]
      }
    ]
  }
];

export default App;

