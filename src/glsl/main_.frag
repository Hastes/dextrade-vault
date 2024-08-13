#version 300 es
precision mediump float;

out vec4 fragColor;

uniform float iTime;
// uniform vec2 iResolution;
const vec2 iResolution = vec2(512, 512);

struct RadialGradient {
    float radius;
    vec4 color;
    vec2 point;
};

void main() {
    float w = iResolution.x / 2.;
    float h = iResolution.y / 2.;

    float fill = max(iResolution.x, iResolution.y);
    float contain = min(iResolution.x, iResolution.y);

    // colors
    vec4 colors[] = vec4[](
        vec4(0.6784313725490196, 0.7568627450980392, 0.9235294117647059, 1),
        vec4(0.6784313725490196, 0.7568627450980392, 0.9235294117647059, 1)
        // vec4(1, 1, 1, 0.7)
        // vec4(0.0196078431372549, 0.027450980392156862, 0.08235294117647059, 0.7)
        // vec4(.580,.702,.988,.7),
        // vec4(.161,.302,.827,.7),
        // vec4(.137,.467,.729,.7),
        // vec4(.114,.686,.925,.7),
        // vec4(.216,.412,.745,.7),
        // vec4(.616,.792,.992,.7),
        // vec4(.353,.906,.992,.7)
    );

    // gradients
    RadialGradient gradients[] = RadialGradient[](
        RadialGradient(0.7, colors[0], vec2(0.5 * w * sin(.13 * iTime - 0.44) + w, 0.5 * h * sin(.34 * iTime - 2.41) + h * 2.0))
        // RadialGradient(.3, colors[1], vec2(.5 * w * sin(.4 * iTime - 3.2) + w, 0.5 * h * sin(.2 * iTime - 1.2) + h))
        // RadialGradient(1.0, colors[5], vec2(0.5 * w * sin(.62 * iTime - 4.81) + w, 1.0 * h * sin(.19 * iTime - 1.17) + h)),
        // RadialGradient(1.0, colors[6], vec2(1.0 * w * sin(.58 * iTime - 5.13) + w, 0.5 * h * sin(.10 * iTime - 2.08) + h)),
        // RadialGradient(0.5, colors[7], vec2(1.5 * w * sin(.12 * iTime - 4.36) + w * 2., 0.5 * h * sin(.08 * iTime - 1.48) + h * 2.)),
        // RadialGradient(0.6, colors[8], vec2(1.5 * w * sin(.07 * iTime - 3.94) + w * 2., 0.6 * h * sin(.03 * iTime - 2.03) + h * 2.)),
        // RadialGradient(0.5, colors[9], vec2(1.5 * w * sin(.01 * iTime - 3.74) + w * 2., 0.5 * h * sin(.12 * iTime - 0.62) + h * 2.))
    );

    vec3 color = vec3(0.0196078431372549, 0.0196078431372549, 0.0196078431372549);

    for(int i = 0; i < gradients.length(); ++i) {
        color = mix(
            gradients[i].color.rgb,
            color,
            gradients[i].color.a * distance(gradients[i].point, gl_FragCoord.xy) / ( fill * gradients[i].radius)
        );
    }

    fragColor = vec4(color, 1.);
  }