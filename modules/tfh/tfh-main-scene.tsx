import * as React from 'react';
import { SceneWrapper } from '../scenes/scene-wrapper';
import styles from './tfh-main-scene.module.css';

export function TrackmaniaForHoursMainScene() {
  return (
    <SceneWrapper>
      <div className="grid grid-rows-scene-wrapper grid-cols-1 flex-1">
        <div className="grid w-full relative">
          <div className="flex items-center justify-center">
            <div className={styles.sceneGrid}>
              <div className={styles.gameWidget} />
              <div className={styles.standingsWidget} />
              <div className={styles.freeformTextWidget} />
              <div className={styles.countdownWidget} />
            </div>
          </div>
        </div>
      </div>
    </SceneWrapper>
  );
}
