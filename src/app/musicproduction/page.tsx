"use client";
import React from "react";
import { CardSpotlight } from "@/components/ui/card-spotlight";

const musicProductionTechniques = [
  {
    category: "Recording Techniques",
    details: `
        (1) Mic placement affects tone (close for detail, far for room ambiance)
        (2) Use pop filters for vocals to reduce plosive sounds
        (3) Double tracking guitars or vocals for a fuller sound
      `
  },
  {
    category: "Mixing Basics",
    details: `
        (1) Balance volume levels to ensure clarity
        (2) Use EQ to remove muddiness and enhance key frequencies
        (3) Panning instruments creates space and depth in the mix
      `
  },
  {
    category: "EQ & Frequency Balancing",
    details: `
        (1) Cut low frequencies from non-bass elements to reduce muddiness
        (2) Boost presence frequencies (2kHz–5kHz) for clarity in vocals
        (3) Use subtractive EQ to remove unwanted resonances rather than boosting too much
      `
  },
  {
    category: "Compression & Dynamics",
    details: `
        (1) Use compression to even out volume inconsistencies
        (2) Attack & release settings affect how natural the compression feels
        (3) Sidechain compression helps make room for kick drums in a dense mix
      `
  },
  {
    category: "Reverb & Delay",
    details: `
        (1) Reverb adds depth; short for tight rooms, long for ambient effects
        (2) Delay can create space, movement, and rhythmic effects
        (3) Use pre-delay on reverb to avoid washing out the original sound
      `
  },
  {
    category: "Synthesis & Sound Design",
    details: `
        (1) Use oscillators, filters, and envelopes to shape synth sounds
        (2) Layer multiple synths with different textures for a rich sound
        (3) FM synthesis and wavetable synthesis create complex tones
      `
  },
  {
    category: "Beat Making & Groove",
    details: `
        (1) Vary velocity and timing for human-like drum patterns
        (2) Swing settings can make rigid beats feel more natural
        (3) Layer multiple drum samples for a thicker sound
      `
  },
  {
    category: "Arrangement & Structure",
    details: `
        (1) Build energy by introducing and removing elements
        (2) Use automation to create dynamic movement
        (3) Transitions (sweeps, risers) help connect different sections smoothly
      `
  },
  {
    category: "Mastering Techniques",
    details: `
        (1) Apply final EQ, compression, and limiting for a polished sound
        (2) Match loudness levels to streaming platform standards
        (3) Stereo widening and harmonic exciters add depth without over-processing
      `
  },
  {
    category: "Production Workflow & Creativity",
    details: `
        (1) Start with a rough idea and refine through iterations
        (2) Use reference tracks to guide mixing and arrangement decisions
        (3) Stay organized with proper labeling and track grouping
      `
  }
];

function MusicProduction() {
  return (
    <div className="py-32 bg-gray-900">
      <h1 className="text-lg md:text-7xl text-center font-sans font-bold mb-10 text-white">Music Production</h1>
      <div className="mt-10 mx-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
          {musicProductionTechniques.map((object) => (
            <div key={object.category} className="flex justify-center">
              <CardSpotlight>
                <div className="p-4 sm:p-6 flex flex-col items-center text-center flex-grow">
                  <p className="text-lg sm:text-xl text-white mt-4 mb-2 dark:text-neutral-200">{object.category}</p>
                  <p className="text-sm mb-4 text-neutral-200 dark:text-neutral-200 flex-grow whitespace-pre-line">{object.details}</p>
                </div>
              </CardSpotlight>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MusicProduction;