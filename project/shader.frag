precision mediump float;

uniform float time; // shiba time
uniform float resolutionWidth; // shiba resolution-width
uniform float resolutionHeight; // shiba resolution-height

#pragma shiba fragment shader

void main() {
	// Normalized pixel coordinates (from 0 to 1).
	vec2 uv = gl_FragCoord.xy / vec2(resolutionWidth, resolutionHeight);
	
	// Time varying pixel color.
	vec3 col = 0.5 + 0.5 * cos(time + uv.xyx + vec3(0, 2, 4));
	
	// Output to screen.
	gl_FragColor = vec4(col, 1.0);
}
