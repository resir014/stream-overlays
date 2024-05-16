import { Montserrat as montserratFont } from 'next/font/google';
import { SceneWrapper } from '../scenes/scene-wrapper';
import styles from './tfh-main-scene.module.css';

const montserrat = montserratFont({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
});

export function TrackmaniaForHoursMainScene() {
  return (
    <SceneWrapper className={montserrat.className}>
      <div className="grid grid-rows-scene-wrapper grid-cols-1 flex-1">
        <div className="grid w-full relative">
          <div className="flex items-center justify-center">
            <div className={styles.sceneGrid}>
              <div className={styles.gameWidget} />
              <div className={styles.standingsWidget}>
                <h3 className="text-4xl font-bold">Standings</h3>
              </div>
              <div className={styles.freeformTextWidget} />
              <div className={styles.countdownWidget} />
            </div>
          </div>
        </div>
      </div>
    </SceneWrapper>
  );
}
