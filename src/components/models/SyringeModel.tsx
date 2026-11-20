import { useMemo } from "react";
import * as THREE from "three";
import { lathe, placed, merge } from "@/components/kit/codeModel";

export default function SyringeModel() {
  // Label texture matching the user's reference image (ref-1.png):
  // Clean off-white background with elegant serif title "Skin Sence" and spaced subtitle "By Arsa Tota"
  const labelTexture = useMemo(() => {
    if (typeof document === "undefined") return null;
    const canvas = document.createElement("canvas");
    canvas.width = 1024;
    canvas.height = 512;
    const ctx = canvas.getContext("2d");
    if (ctx) {
      // Off-white label surface
      ctx.fillStyle = "#FAF8F5";
      ctx.fillRect(0, 0, 1024, 512);

      // Subtle hairline border inside label
      ctx.strokeStyle = "#E2D8CC";
      ctx.lineWidth = 6;
      ctx.strokeRect(24, 24, 976, 464);

      // Main Brand Title: "Skin Sence"
      ctx.fillStyle = "#0A0A0A";
      ctx.font = "bold 92px Cormorant Garamond, Georgia, serif";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillText("Skin Sence", 512, 210);

      // Subtitle: "B y   A r s a   T o t a"
      ctx.fillStyle = "#262626";
      ctx.font = "500 36px Cormorant Garamond, Georgia, serif";
      ctx.fillText("B y   A r s a   T o t a", 512, 330);
    }
    const tex = new THREE.CanvasTexture(canvas);
    tex.colorSpace = THREE.SRGBColorSpace;
    tex.wrapS = THREE.ClampToEdgeWrapping;
    tex.wrapT = THREE.ClampToEdgeWrapping;
    return tex;
  }, []);

  const parts = useMemo(() => {
    // 1. Dark Glass Bottle Body Profile (lathe)
    const bottlePoints: [number, number][] = [
      [0, 0],
      [0.72, 0.02],
      [0.78, 0.12],
      [0.78, 2.2],
      [0.74, 2.45],
      [0.6, 2.7],
      [0.38, 2.9],
      [0.38, 3.4],
      [0.42, 3.44],
      [0.42, 3.52],
      [0.36, 3.54],
      [0.36, 3.58],
      [0, 3.58],
    ];
    const bottleGeo = lathe(bottlePoints, 64);

    // 2. White Label Sleeve wrapped around middle cylinder
    const labelGeo = new THREE.CylinderGeometry(0.788, 0.788, 1.45, 64, 1, true);
    labelGeo.translate(0, 1.25, 0);

    // Rotate label texture UVs so title faces front (+Z)
    const uvs = labelGeo.attributes.uv;
    for (let i = 0; i < uvs.count; i++) {
      let u = uvs.getX(i);
      u = (u + 0.5) % 1.0;
      uvs.setX(i, u);
    }

    // 3. Black Cap Collar & Ribs
    const collarBase = new THREE.CylinderGeometry(0.44, 0.44, 0.65, 48);
    collarBase.translate(0, 3.75, 0);

    // Add vertical ribs around collar
    const ribs: THREE.BufferGeometry[] = [];
    const ribCount = 36;
    for (let i = 0; i < ribCount; i++) {
      const angle = (i / ribCount) * Math.PI * 2;
      const r = 0.445;
      const x = Math.cos(angle) * r;
      const z = Math.sin(angle) * r;
      const rib = new THREE.BoxGeometry(0.025, 0.62, 0.025);
      ribs.push(placed(rib, { position: [x, 3.75, z], rotation: [0, -angle, 0] }));
    }
    const collarMerged = ribs.length > 0 ? merge([collarBase, ...ribs]) : collarBase;

    // 4. Rubber Dropper Bulb Top
    const dropperPoints: [number, number][] = [
      [0.36, 4.07],
      [0.38, 4.15],
      [0.36, 4.5],
      [0.3, 4.9],
      [0.2, 5.15],
      [0, 5.25],
    ];
    const dropperGeo = lathe(dropperPoints, 48);

    // Materials
    const glassMat = new THREE.MeshPhysicalMaterial({
      name: "bottleGlass",
      color: "rgb(12, 10, 8)",
      metalness: 0.1,
      roughness: 0.08,
      clearcoat: 1.0,
      clearcoatRoughness: 0.03,
    });

    const labelMat = new THREE.MeshStandardMaterial({
      name: "bottleLabel",
      color: "rgb(255, 255, 255)",
      map: labelTexture,
      roughness: 0.35,
      metalness: 0.02,
    });

    const capMat = new THREE.MeshStandardMaterial({
      name: "bottleCap",
      color: "rgb(18, 18, 18)",
      metalness: 0.25,
      roughness: 0.4,
    });

    const dropperMat = new THREE.MeshStandardMaterial({
      name: "dropperRubber",
      color: "rgb(15, 15, 15)",
      metalness: 0.05,
      roughness: 0.85,
    });

    return { bottleGeo, labelGeo, collarMerged, dropperGeo, glassMat, labelMat, capMat, dropperMat };
  }, [labelTexture]);

  return (
    <group position={[0, -2.5, 0]}>
      <mesh geometry={parts.bottleGeo} material={parts.glassMat} />
      <mesh geometry={parts.labelGeo} material={parts.labelMat} />
      <mesh geometry={parts.collarMerged} material={parts.capMat} />
      <mesh geometry={parts.dropperGeo} material={parts.dropperMat} />
    </group>
  );
}
