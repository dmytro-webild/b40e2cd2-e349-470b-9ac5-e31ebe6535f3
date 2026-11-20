import * as THREE from "three";
import { lathe, finishes, useParts } from "@/components/kit/codeModel";

type SyringeModelProps = {
  color?: string;
};

const BARREL_RADIUS = 0.38;
const BARREL_LENGTH = 2.8;
const NEEDLE_LENGTH = 1.2;

export default function SyringeModel({ color = "#c6a15b" }: SyringeModelProps) {
  const f = useParts(() => finishes(color), [color]);

  const g = useParts(() => {
    // Outer glass barrel geometry with refined lip and nozzle connector
    const barrel = lathe([
      [0.08, -BARREL_LENGTH / 2 - 0.15],
      [BARREL_RADIUS * 0.5, -BARREL_LENGTH / 2 - 0.1],
      [BARREL_RADIUS, -BARREL_LENGTH / 2],
      [BARREL_RADIUS, BARREL_LENGTH / 2],
      [BARREL_RADIUS * 1.3, BARREL_LENGTH / 2 + 0.05],
      [BARREL_RADIUS * 1.3, BARREL_LENGTH / 2 + 0.12],
      [BARREL_RADIUS * 0.85, BARREL_LENGTH / 2 + 0.15],
    ]);

    // Flange grip geometry (finger rest ring at top)
    const flange = new THREE.CylinderGeometry(BARREL_RADIUS * 1.8, BARREL_RADIUS * 1.8, 0.1, 32);
    flange.scale(1.4, 1, 0.8);

    // Aesthetic liquid serum inside barrel
    const liquid = lathe([
      [0, -BARREL_LENGTH / 2 + 0.1],
      [BARREL_RADIUS - 0.04, -BARREL_LENGTH / 2 + 0.1],
      [BARREL_RADIUS - 0.04, BARREL_LENGTH * 0.1],
      [0, BARREL_LENGTH * 0.1],
    ]);

    // Plunger shaft and top handle
    const plungerShaft = new THREE.BoxGeometry(0.1, BARREL_LENGTH * 0.85, 0.1);
    const plungerTop = new THREE.CylinderGeometry(BARREL_RADIUS * 1.3, BARREL_RADIUS * 1.3, 0.08, 32);
    const plungerStopper = new THREE.CylinderGeometry(BARREL_RADIUS - 0.03, BARREL_RADIUS - 0.03, 0.3, 32);

    // Metallic needle hub (luer lock cone)
    const hub = lathe([
      [BARREL_RADIUS * 0.4, -BARREL_LENGTH / 2 - 0.15],
      [BARREL_RADIUS * 0.35, -BARREL_LENGTH / 2 - 0.45],
      [0.08, -BARREL_LENGTH / 2 - 0.55],
    ]);

    // Needle cannula tip
    const needle = new THREE.CylinderGeometry(0.02, 0.015, NEEDLE_LENGTH, 16);

    // Graduation tick box
    const tick = new THREE.BoxGeometry(0.08, 0.02, 0.02);

    return {
      barrel,
      flange,
      liquid,
      plungerShaft,
      plungerTop,
      plungerStopper,
      hub,
      needle,
      tick,
    };
  }, []);

  const ticks = Array.from({ length: 8 }, (_, i) => -1.1 + i * 0.3);

  return (
    <group name="syringe-model" rotation={[0.2, 0, -0.35]}>
      <group name="part-body">
        {/* Outer glass barrel */}
        <mesh name="barrel" geometry={g.barrel} material={f.glass} />

        {/* Top flange grip */}
        <mesh name="flange" geometry={g.flange} material={f.paint} position={[0, BARREL_LENGTH / 2 + 0.1, 0]} />

        {/* Liquid / Serum content inside barrel */}
        <mesh name="liquid" geometry={g.liquid} material={f.paint} />

        {/* Measurement tick marks */}
        <group name="ticks">
          {ticks.map((y, i) => (
            <mesh key={i} geometry={g.tick} material={f.paint} position={[BARREL_RADIUS + 0.01, y, 0]} />
          ))}
        </group>
      </group>

      <group name="part-plunger" position={[0, BARREL_LENGTH * 0.1, 0]}>
        {/* Piston stopper */}
        <mesh name="stopper" geometry={g.plungerStopper} material={f.rubber} position={[0, 0.15, 0]} />
        {/* Plunger shaft */}
        <mesh name="shaft" geometry={g.plungerShaft} material={f.chrome} position={[0, BARREL_LENGTH * 0.4 + 0.3, 0]} />
        {/* Top push handle */}
        <mesh name="top" geometry={g.plungerTop} material={f.paint} position={[0, BARREL_LENGTH * 0.85 + 0.3, 0]} />
      </group>

      <group name="part-needle">
        {/* Hub nozzle */}
        <mesh name="hub" geometry={g.hub} material={f.chrome} />
        {/* Needle tip */}
        <mesh name="needle" geometry={g.needle} material={f.chrome} position={[0, -BARREL_LENGTH / 2 - 0.55 - NEEDLE_LENGTH / 2, 0]} />
      </group>
    </group>
  );
}
